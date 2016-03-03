<?php

namespace App\Providers;
use App;
use Illuminate\Support\ServiceProvider;

class makeSoapRequestServiceProvider extends ServiceProvider
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
       App::bind('makeSoapRequest',function($app,$parameters){
		return new \App\MyTrippediaClasses\makeSoapRequest($parameters);

	}); 
    }
}
