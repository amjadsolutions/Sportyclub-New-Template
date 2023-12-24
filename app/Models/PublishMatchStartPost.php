<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PublishMatchStartPost extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'match_id', 'photo_url'];
}
