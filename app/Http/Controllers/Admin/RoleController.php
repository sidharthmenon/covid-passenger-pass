<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function __construct(){
        $this->middleware('role');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // dd($request->all());
        $perPage = request('perPage', 10);
        $searchParam = request('searchParam', 'name');
        $query = '%'.request('query', '').'%';
        $roles = Role::where($searchParam, 'LIKE', $query)->paginate($perPage);
        return Inertia::render('Roles/Index', [
            'roles' => $roles,
            'searchParam' => $searchParam,
            'query' => request('query', '')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $permissions = Permission::all();

        return Inertia::render('Roles/Create', [
            "permissions" => $permissions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:roles,name|max:50|min:4',
            'description' => 'required|max:50',
        ]);

        if($validator->fails()){
            return redirect('roles/create')->withErrors($validator)->withInput();
        }

        $role = new Role();
        $role->name = $request->input('name');
        $role->description = $request->input('description');
        $role->save();

        $role->permissions()->sync($request->permissions);

        return redirect('roles')->with(["message"=>"Roles Added"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        //
        $permissions = Permission::all();

        return Inertia::render('Roles/Edit', [
            "role" => $role->load('permissions'),
            "permissions" => $permissions
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        //
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:50|min:4',
            'description' => 'required|max:50',
        ]);

        if($validator->fails()){
            return redirect()->route('roles.edit',[$role->id])->withErrors($validator)->withInput();
        }

        $role->name = $request->input('name');
        $role->description = $request->input('description');
        $role->save();

        $role->permissions()->sync($request->permissions);

        return redirect()->route('roles.edit',[$role->id])->with(["message"=>"Role Edited"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
        $role->delete();
        return redirect('roles')->with(["message"=>"Role deleted"]);
    }
}
