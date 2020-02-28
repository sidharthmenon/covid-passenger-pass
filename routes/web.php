<?php

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

Route::get('/', function () {
    return Redirect::route('home');
});

Route::get('home', 'HomeController@index')->name('home');

Route::get('test', function () {
    return Inertia::render('Dashboard/test');
})->name('test');

Auth::routes(['register' => false]);

Route::resource('users', 'Admin\UserController');
Route::resource('roles', 'Admin\RoleController');