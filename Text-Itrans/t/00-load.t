#!perl -T

use Test::More tests => 1;

BEGIN {
    use_ok( 'Text::Itrans' );
}

diag( "Testing Text::Itrans $Text::Itrans::VERSION, Perl $], $^X" );
