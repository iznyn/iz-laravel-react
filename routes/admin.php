<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AuthController;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$rootPath = 'admin';

/*
 * Auth Routes
 */
Route::get( '/' . $rootPath . '/login', [AuthController::class, 'login'])
  ->name('admin_login');

Route::get( '/' . $rootPath . '/logout', [AuthController::class, 'logout'])
  ->name('admin_logout');


/*
 * Main Routes
 */
Route::group(['prefix' => $rootPath, 'middleware' => ['auth.admin']], function()
{
  // Dashboard
  Route::get( '/', [DashboardController::class, 'index'])
    ->name('admin_dashboard');
});


