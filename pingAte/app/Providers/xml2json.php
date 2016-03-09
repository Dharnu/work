<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class xml2json extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        App::bind('xml2json',function(){
		return new \App\MyTrippediaClasses\xml2json;

	}); 
    }
}
