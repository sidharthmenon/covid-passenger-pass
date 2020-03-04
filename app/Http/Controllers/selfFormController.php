<?php

namespace App\Http\Controllers;

use App\Country;
use App\Passenger;
use App\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class selfFormController extends Controller
{
    public function __construct(){
        $this->middleware('signed')->only('show');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $states= State::all();
        $countries = Country::all();
        return Inertia::render('Forms/self', [
            'states' => $states,
            'countries' => $countries
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
        $passenger = new Passenger();

        $passenger->name = $request->input('name');
        $passenger->seat = $request->input('seat');
        $passenger->flight = $request->input('flight');
        $passenger->passport = $request->input('passport');
        $passenger->date = $request->input('date');
        $passenger->origin = $request->input('origin');
        $passenger->destination = $request->input('destination');
        $passenger->house = $request->input('house');
        $passenger->street = $request->input('street');
        $passenger->tehsil = $request->input('tehsil');
        $passenger->district = $request->input('district');
        $passenger->state = $request->input('state');
        $passenger->pin = $request->input('pin');
        $passenger->phone = $request->input('phone');
        $passenger->mobile = $request->input('mobile');
        $passenger->email = $request->input('email');
        $passenger->cities = $request->input('cities');
        $passenger->fever = $request->input('fever');
        $passenger->cough = $request->input('cough');
        $passenger->respiratory = $request->input('respiratory');

        $passenger->save();

        $passenger->countries()->sync($request->input('countries'));

        return redirect(URL::signedRoute('self.show', [$passenger->id]));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Passenger  $passenger
     * @return \Illuminate\Http\Response
     */
    public function show(Passenger $self)
    {
        //
        // dd($self->name);
        return Inertia::render('Forms/code', [
            'passenger' => $self,
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
