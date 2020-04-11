<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDailyHealthsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daily_healths', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->id('passenger_id');
            $table->string('no');
            $table->string('fever');
            $table->string('cough');
            $table->string('throat');
            $table->string('dyspnea');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daily_healths');
    }
}
