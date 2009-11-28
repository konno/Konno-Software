#!perl -T
use strict;
use warnings;
use Text::Itrans;
use Text::More tests => 1;

my $t = Text::Itrans->new('en', 'ar');
my $translated = $t->translate('Perl');
ok($translated eq $t->swap->translate($translated));
