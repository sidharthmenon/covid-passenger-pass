<?php

use Illuminate\Database\Seeder;
use App\Permission;
use App\Role;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $abilities = [
            'index' => 'view',
            'edit' => 'edit',
            'show' => 'view',
            'update' => 'edit',
            'create' => 'add',
            'store' => 'add',
            'destroy' => 'delete'
        ];

        $permission_ids = [];
        foreach(Route::getRoutes()->getRoutes() as $key => $route){
            $action = explode('@', $route->getActionname());
            $controller = $action[0];
            $method = end($action);

            $name = Arr::last(explode('\\',$controller));
            // $this->command->info($name);
            $_name = strtolower(str_replace("Controller","",$name));

            if(!in_array($_name, array("closure","login", "forgotpassword", "resetpassword"))){

                
                $perm_name = $_name."_".(array_key_exists($method,$abilities)?$abilities[$method]:$method);

                $this->command->info(print_r($perm_name, true));

                $check = Permission::where('name', $perm_name)->first();
                if(!$check){
                    $permission = New Permission;
                    $permission->name = $perm_name;
                    $permission->save();
                    $permission_ids[] = $permission->id;
                }
            }
        }

        $spl_perms = ["view_all", "edit_all", "delete_all"];

        foreach($spl_perms as $item){
            $check = Permission::where('name', $item)->first();
            if(!$check){
                $permission = New Permission;
                $permission->name = $item;
                $permission->save();
                $permission_ids[] = $permission->id;
            }
        }

        $super = Role::where('name', 'super')->first();
        $super->permissions()->attach($permission_ids);

    }
}
