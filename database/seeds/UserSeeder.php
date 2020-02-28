<?php

use Illuminate\Database\Seeder;
use App\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $super = Role::where("name", "super")->first();

        DB::table('users')->insert([
            "name" => "Admin",
            "email" => "admin@portal.in",
            "password" => bcrypt('admin'),
            "role_id" => $super->id
        ]);
    }
}
