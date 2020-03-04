<?php

namespace App\Http\Controllers;

use App\Imports\importModel;
use App\TestModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class TestController extends Controller
{
    //
    public function index()
    {
        //
        $perPage = request('perPage', 10);
        $searchParam = request('searchParam', 'first_name');
        $query = '%'.request('query', '').'%';
        $testmodel = TestModel::where($searchParam, 'LIKE', $query)->with('role')->paginate($perPage);
        return Inertia::render('Test/index', [
            'testmodel' => $testmodel,
            'searchParam' => $searchParam,
            'query' => request('query', '')
        ]);
    }

    public function import_file_select(){
        return Inertia::render('Test/import_select');
    }

    public function import_show_headers(Request $request){

        $path = $request->file('file')->store('csv');
        // $path = $file->getRealPath().'.'.$file->getClientOriginalExtension();
        // dd($path);
        //$data = Excel::load($path, function($reader){})->get()->toArray();
        // $data = Excel::toArray(new importModel, $path, 'local', \Maatwebsite\Excel\Excel::CSV);
        // $file = Storage::get($path);
        $data = array_map('str_getcsv', file(storage_path('app/'.$path)));
        $headers = $data[0];


        $fields = Schema::getColumnListing('test_models');
        return Inertia::render('Test/import_select',[
            'fields' => $fields,
            'headers' => $headers,
            'path' => $path
        ]);
    }

    public function import_process_file(Request $request){
        dd($request->all());
    }

    public function create(){

    }

    public function edit(){
        
    }
}
