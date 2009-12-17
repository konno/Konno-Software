#!perl -T

use Test::More tests => 1;

BEGIN {
    use_ok( 'String' );
}

diag( "Testing String $String::VERSION, Perl $], $^X" );
