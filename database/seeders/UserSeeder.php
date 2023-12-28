<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // nota los roles 4 son admin
        $userAdmin = new User();
        $userAdmin->name = 'cley';
        $userAdmin->email = 'cley@gmail.com';
        $userAdmin->rol = '4';
        $userAdmin->avatar = '/storage/img/icons/person-circle.svg';
        $userAdmin->password = bcrypt('2303');
        $userAdmin->save();
    }
}
