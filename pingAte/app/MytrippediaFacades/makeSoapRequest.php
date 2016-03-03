<?php

namespace App\MytrippediaFacades;
use Illuminate\Support\Facades\Facade;

class makeSoapRequest extends Facade{
    protected static function getFacadeAccessor() { return 'makeSoapRequest'; }
}
