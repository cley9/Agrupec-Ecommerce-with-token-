<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

// use Illuminate\Database\Eloquent\Model;

// class User extends Authenticatable
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'rol',
        'password',
        'avatar',
        // 'remember_token',
        'external_id',
        'external_auth', 
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];   
    public function usermenu_desc(){
        return "Administrador";
    }
     // funciones de token
     public function getJWTIdentifier(){
        return $this->getKey();
    }
    public function getJWTCustomClaims(){
        return [];
    }

    // this is join db  en el model 
    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'tbl_cart','userId','productoId')->withPivot('cantidad');
    }
    
    function listPedidoUser(){
        return $this->belongsToMany(Producto::class, 'tbl_cart','userId','productoId')->withPivot('cantidad');
    }

}
