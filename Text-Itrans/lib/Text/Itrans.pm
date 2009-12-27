package Text::Itrans;
use warnings;
use strict;
our $VERSION = sprintf "%.2f", (q$Revision$ =~ /(\d+)/g)[0] / 100;
use Carp;
use List::Util qw(first);
use URI;
use LWP::UserAgent;
use YAML::Syck;

sub new{
    my $class = shift;
    my $self  = {
        fromlang => shift,
        tolang   => shift,
        @_
    };
    $self->{base_uri} ||=
        'http://' . $self->{fromlang} . '.wikipedia.org/w/api.php';
    unless ( $self->{ua} ) {
        my $ua = LWP::UserAgent->new;
        $ua->agent( __PACKAGE__ . '/' . $VERSION );
        $self->{ua} = $ua;
    }
    bless $self, $class;
}

for my $meth (qw/base_uri ua fromlang tolang/) {
    no strict 'refs';
    *$meth = sub{
        my $self = shift;
        $self->{$meth} = shift if @_;
        $self->{$meth};
    };
}

sub swap {
    my $self = shift;
    ($self->{fromlang}, $self->{tolang}) =
        ($self->{tolang}, $self->{fromlang});
    return $self;
}

sub translate {
    my $self  = shift;
    my $query = join '|', @_;
    my $uri = URI->new( $self->{base_uri} );
    $uri->query_form(
        action    => 'query',
        prop      => 'langlinks',
        titles    => $query,
        redirects => 1,
        lllimit   => 500,
        format    => 'yaml'
    );
    my $res = $self->{ua}->get($uri);
    return unless $res->is_success;
    my $api = YAML::Syck::Load( $res->content );
    my @translations;
    PAGE:
    for my $page ( @{ $api->{query}{pages} } ) {
        for my $langlink ( @{ $page->{langlinks} } ) {
            next unless $langlink->{lang} eq $self->{tolang};
            push @translations, $langlink->{'*'};
            next PAGE;
        }
    }
    return wantarray
         ? @translations
         : $translations[0];
}

1; # End of Text::Itrans

=head1 NAME

Text::Itrans - Perl interface to itrans() language translation function

=head1 VERSION

$Id$

=head1 SYNOPSIS

    use Text::Itrans;
    my $translator = Text::Itrans->new($fromlang, $tolang);
    my $translated = $translator->translate($str0, $str1, ... $strN);

=head1 DESCRIPTION

The B<Text::Itrans> module provides a Perl interface to the itrans()
function as defined by the Single UNIX Specification.

The translate() method translates the language of text in the input
string from the I<fromlang> language to the I<tolang> language, and
returns the result.

Settings of I<fromlang> and I<tolang> and their permitted combinations
are implementation-dependent.  Valid values are specified in the
system documentation; the itrans(1) utility should also provide a B<-l>
option that lists all supported languages.

=head1 EXPORT

None.

=head1 METHODS

=head2 new

Create the translator object.

    # via constructor
    my $translator = Text::Itrans->new($fromlang, $tolang);
    # or setter
    $translator->fromlang($fromlang);
    $translator->tolang($tolang);

=head2 base_uri

Returns the URI object.

=head2 ua

Returns the LWP::UserAgent object.

=head2 fromlang

Specifies the source language by ISO 639 code.

    $translator->fromlang('als'); # Alemannic German

=head2 tolang

Specifies the target language by ISO 639 code.

    $translator->tolang('mk'); # Macedonian

=head2 swap

Swaps the source and target languages.

=head2 translate

Does translate.

    my $translated = $translator->translate('Perl');

=head1 AUTHOR

Yuki Konno, C<< <Konno.Software at gmail.com> >>

=head1 BUGS

Please report any bugs or feature requests to C<bug-text-itrans at rt.cpan.org>, or through
the web interface at L<http://rt.cpan.org/NoAuth/ReportBug.html?Queue=Text-Itrans>.  I will be notified, and then you'll
automatically be notified of progress on your bug as I make changes.

=head1 SUPPORT

You can find documentation for this module with the perldoc command.

    perldoc Text::Itrans

You can also look for information at:

=over 4

=item * RT: CPAN's request tracker

L<http://rt.cpan.org/NoAuth/Bugs.html?Dist=Text-Itrans>

=item * AnnoCPAN: Annotated CPAN documentation

L<http://annocpan.org/dist/Text-Itrans>

=item * CPAN Ratings

L<http://cpanratings.perl.org/d/Text-Itrans>

=item * Search CPAN

L<http://search.cpan.org/dist/Text-Itrans/>

=back

=head1 COPYRIGHT & LICENSE

Copyright 2009 Yuki Konno.

This program is free software; you can redistribute it and/or modify it
under the terms of either: the GNU General Public License as published
by the Free Software Foundation; or the Artistic License.

See http://dev.perl.org/licenses/ for more information.
