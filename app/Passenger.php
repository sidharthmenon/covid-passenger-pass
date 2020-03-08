<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    //

    public function countries(){
        return $this->belongsToMany('App\Country');
    }

    public function origin(){
        return $this->belongsTo('App\Airport', 'origin');
    }

    public function destination(){
        return $this->belongsTo('App\Airport', 'destination');
    }
}
