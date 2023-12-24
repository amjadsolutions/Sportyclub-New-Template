<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CricketNews extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'category','title', 'image', 'details'];
}
