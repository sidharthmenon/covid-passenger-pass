<?php

namespace App\Http\Middleware;

use Closure;
use App\Role;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;

class RoleAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $abilities = [
            'index' => 'view',
            'edit' => 'edit',
            'show' => 'view',
            'update' => 'edit',
            'create' => 'add',
            'store' => 'add',
            'destroy' => 'delete'
        ];

        if (Auth::guard($guard)->check()) {
            // $role = Role::findOrFail(auth()->user()->role_id);
            $permissions = array_column(auth()->user()->role->permissions->toArray(),"name");

            // Log::channel('daily')->info($permissions);

            $action = class_basename($request->route()->getActionName());
            $_action = explode('@', $action);
            $controller = $_action[0];
            $method = end($_action);

            $name = Arr::last(explode('\\',$controller));
            $_name = strtolower(str_replace("Controller","",$name));
            $perm_name = $_name."_".(array_key_exists($method,$abilities)?$abilities[$method]:$method);

            foreach($permissions as $permission){
                if($permission == $perm_name){
                    return $next($request);
                }
            }
        }
        else{
            return redirect('/login');
        }

        return redirect('nopermission');
    }
}
