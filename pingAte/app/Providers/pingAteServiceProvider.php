<?php

namespace App\Providers;
use App;
use Illuminate\Support\ServiceProvider;

class pingAteServiceProvider extends ServiceProvider
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
       App::bind('App\MyTrippediaClasses\pingATE','App\MyTrippediaClasses\pingATECurl'); 
    }
}
