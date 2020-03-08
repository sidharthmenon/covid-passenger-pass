<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassengerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passengers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('seat');
            $table->string('flight');
            $table->string('passport');
            $table->string('date');
            $table->unsignedBigInteger('origin');
            $table->unsignedBigInteger('destination');
            $table->string('house');
            $table->string('street');
            $table->string('tehsil')->nullable();
            $table->string('district');
            $table->string('state');
            $table->string('pin');
            $table->string('phone')->nullable();
            $table->string('mobile');
            $table->string('email')->nullable();
            $table->string('fever');
            $table->string('cough');
            $table->string('respiratory');
            $table->string('cities');
            $table->text('remarks')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();

            $table->foreign('origin')->references('id')->on('airports');
            $table->foreign('destination')->references('id')->on('airports');
        });

        Schema::create('country_passenger', function (Blueprint $table){
            $table->bigIncrements('id');

            $table->unsignedBigInteger('country_id')->index();
            $table->foreign('country_id')->references('id')->on('countries');

            $table->unsignedBigInteger('passenger_id')->index();
            $table->foreign('passenger_id')->references('id')->on('passengers');
            
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passenger');
    }
}
