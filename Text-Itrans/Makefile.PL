#
# $Id$
#
use 5.008001;
use strict;
use warnings;
use ExtUtils::MakeMaker;

my @exe_files = qw(
  itrans
);

WriteMakefile(
    NAME                => 'Text::Itrans',
    AUTHOR              => q{Yuki Konno <Konno.Software@gmail.com>},
    VERSION_FROM        => 'lib/Text/Itrans.pm',
    ABSTRACT_FROM       => 'lib/Text/Itrans.pm',
    ($ExtUtils::MakeMaker::VERSION >= 6.3002
      ? ('LICENSE'=> 'perl')
      : ()),
    PL_FILES            => {},
    PREREQ_PM => {
        'Test::More'     => 0,
        'URI'            => 0,
        'LWP::UserAgent' => 0,
        'YAML::Syck'     => 0,
    },
    EXE_FILES => [ map "bin/$_", @exe_files ],
    dist                => { COMPRESS => 'gzip -9f', SUFFIX => 'gz', },
    clean               => { FILES => 'Text-Itrans-*' },
);
