<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Passenger;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PassengerController extends Controller
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
        $passenger = Passenger::where($searchParam, 'LIKE', $query)->paginate($perPage);
        return Inertia::render('Passenger/Index', [
            'passengers' => $passenger,
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function show(Passenger $passenger)
    {
        //
        $passenger->load('countries');
        return Inertia::render('Passenger/show', [
            "passenger" => $passenger
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function edit(Passenger $passenger)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Passenger $passenger)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function destroy(Passenger $passenger)
    {
        //
    }
}
