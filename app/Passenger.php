<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    //

    public function countries(){
        return $this->belongsToMany('App\Country');
    }
}
