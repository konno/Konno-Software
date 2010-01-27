#!perl -T
use strict;
use warnings;
use Text::Itrans;
use Test::More tests => 1;

my $i = Text::Itrans->new('en', 'ar');
my $t = 'Perl';
is $i->swap->translate( $i->translate($t) ), $t;
