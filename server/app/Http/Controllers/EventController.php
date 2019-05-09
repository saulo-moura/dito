<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use App\Event;

class EventController extends Controller
{
    public function show($event)
    {
        if(strlen($event) >= 2)
            return Event::where('event', 'like', "%{$event}%")->simplePaginate(10);
        $retorno = ['error' => 'O termo da pesquisa deve ter 2 ou mais caracteres'];
        return response($retorno, 400);
    }

    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'event' => 'required|max:255',
                'timestamp' => 'required|date',
            ]);
            
            if ($validator->fails())
                return response($validator, 400);
            
            $event = new Event;
            $event->event = $request->event;
            $event->timestamp = $request->timestamp;
            $event->save();
    
            return response($event, 201);
        } catch(Exception $e) {
            return response($e->getMessage(), 400);
        }
    }
}
