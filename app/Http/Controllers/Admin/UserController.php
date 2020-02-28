<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware('role');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $perPage = request('perPage', 10);
        $searchParam = request('searchParam', 'name');
        $query = '%'.request('query', '').'%';
        $users = User::where($searchParam, 'LIKE', $query)->with('role')->paginate($perPage);
        return Inertia::render('Users/index', [
            'users' => $users,
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
        $roles = Role::all();
        return Inertia::render('Users/Create', [
            "roles" => $roles
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
            'email' => 'required|unique:users,email|max:255',
            'name' => 'required|max:50|min:5',
            'password' => 'required|min:5',
            'phone' => 'required|numeric',
            'role' => 'exists:roles,id'
        ]);

        if($validator->fails()){
            return redirect('users/create')->withErrors($validator)->withInput();
        }

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->password = bcrypt($request->input('password'));
        $user->role_id = $request->input('role');
        $user->save();

        return redirect('users')->with(["message"=>"User Added"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
        $roles = Role::all();
        return Inertia::render('Users/Edit', [
            "roles" => $roles,
            "user" => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users,email,'.$user->id.'|max:255',
            'name' => 'required|max:50|min:5',
            'phone' => 'required|numeric',
            'role' => 'exists:roles,id'
        ]);

        if($validator->fails()){
            return redirect()->route('users.edit',[$user->id])->withErrors($validator)->withInput();
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');

        if($request->input('password')){
            $user->password = bcrypt($request->input('password'));
        }

        $user->role_id = $request->input('role');
        $user->save();

        return redirect()->route('users.edit',[$user->id])->with(["message"=>"User Edited"]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        $user->delete();
        return redirect('users')->with(["message"=>"User deleted"]);
    }
}
