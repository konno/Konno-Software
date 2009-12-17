package String;
use 5.008001;
use warnings;
use strict;
our $VERSION = sprintf "%.2f", (q$Revision$ =~ /(\d+)/g)[0] / 100;

use overload
    q("") => \&toString,
    q(==) => sub { overload::StrVal($_[0]) eq overload::StrVal($_[1]) },
    fallback => 1
    ;

require Exporter;
use base qw/Exporter/;

our @EXPORT = qw(String);

sub new {
    my $class  = shift;
    my $string = shift;
    $string = '' unless defined $string;
    bless { toString => $string }, $class;
}

sub length {
    my $self = shift;
    $self->{length} = length $self unless defined $self->{length};
    $self->{length};
}

sub toString { $_[0]->{toString} }

sub String { __PACKAGE__->new(@_) }

1; # End of String

=head1 NAME

String - wraps Perl's string primitive data type

=head1 VERSION

$Id$

=head1 SYNOPSIS

Quick summary of what the module does.

Perhaps a little code snippet.

    use String;
    String($string);
    new String($string);

String literals take the form:

    'stringText'
    "stringText"

=head1 EXPORT

L<String>

=head1 FUNCTIONS

Under construction.

=head1 AUTHOR

Yuki Konno, C<< <Konno.Software at gmail.com> >>

=head1 BUGS

Please report any bugs or feature requests to C<bug-string at rt.cpan.org>, or through
the web interface at L<http://rt.cpan.org/NoAuth/ReportBug.html?Queue=String>.  I will be notified, and then you'll
automatically be notified of progress on your bug as I make changes.

=head1 SUPPORT

You can find documentation for this module with the perldoc command.

    perldoc String

You can also look for information at:

=over 4

=item * RT: CPAN's request tracker

L<http://rt.cpan.org/NoAuth/Bugs.html?Dist=String>

=item * AnnoCPAN: Annotated CPAN documentation

L<http://annocpan.org/dist/String>

=item * CPAN Ratings

L<http://cpanratings.perl.org/d/String>

=item * Search CPAN

L<http://search.cpan.org/dist/String/>

=back

=head1 ACKNOWLEDGEMENTS

L<https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String>

=head1 COPYRIGHT & LICENSE

Copyright 2009 Yuki Konno.

This program is free software; you can redistribute it and/or modify it
under the terms of either: the GNU General Public License as published
by the Free Software Foundation; or the Artistic License.

See http://dev.perl.org/licenses/ for more information.

=cut
