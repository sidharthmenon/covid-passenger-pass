<?php

use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

Route::get('/', function () {
    return Redirect::route('home');
});

Route::get('home', 'HomeController@index')->name('home');

// Route::get('test', function () {
//     return Inertia::render('Dashboard/test');
// })->name('test');

// Route::get('test/list', 'TestController@index')->name('testmodel.index');
// Route::get('test/create', 'TestController@create')->name('testmodel.create');
// Route::get('test/edit', 'TestController@edit')->name('testmodel.edit');

// Route::get('test/import', 'TestController@import_file_select')->name('testmodel.import');
// Route::post('test/import', 'TestController@import_show_headers');
// Route::put('test/import', 'TestController@import_process_file');

Auth::routes(['register' => false]);

Route::resource('users', 'Admin\UserController');
Route::resource('roles', 'Admin\RoleController');

Route::resource('self', 'selfFormController');
Route::resource('passengers', 'Admin\PassengerController');

// Route::get('countries/list', 'Admin\CountryController@view');