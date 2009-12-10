#!/usr/bin/env perl
#
# $Id$
#
use strict;
use warnings;
$_ = do { local $/; <> };
s,sub,(function(),g;
s,},}),g;
s,->,,g;
s,\(\s*\)\s*(\w+?)\s*{, $1\(\){,g;
s,\(\s*\)\s*{\s*my\s*(\$\w+?)\s*=\s*shift\s*;?,($1){,g;
print;
