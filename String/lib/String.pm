package String;
use 5.008001;
use warnings;
use strict;
our $VERSION = sprintf "%.2f", (q$Revision$ =~ /(\d+)/g)[0] / 100;

use Carp;
use overload
    q("") => \&toString,
    q(==) => sub { ! $_[0]->localeCompare($_[1]) },
    q(<)  => sub {   $_[0]->localeCompare($_[1]) < 0 },
    q(>)  => sub {   $_[0]->localeCompare($_[1]) > 0 },
    fallback => 1,
    ;

sub new {
    my $class  = shift;
    my $string = shift;
    $string = '' unless defined $string;
    bless { toString => $string }, $class;
}

sub length {
    my $this = shift;
    $this->{length} = CORE::length $this unless defined $this->{length};
    $this->{length};
}

sub name { __PACKAGE__ }

sub fromCharCode {
    my $this = shift;
    __PACKAGE__->new( join '', map { chr() } @_ );
}

sub toSource {
    my $this = shift;
    require Data::Dumper;
    local $Data::Dumper::Terse  = 1;
    local $Data::Dumper::Indent = 0;
    Data::Dumper::Dumper($this);
}

sub toString { $_[0]->{toString} }

sub charAt {
    my ( $this, $index ) = @_;
    __PACKAGE__->new( substr $this->{toString}, $index, 1 );
}

sub charCodeAt {
    my ( $this, $index ) = @_;
    ord substr $this, $index, 1;
}

sub concat {
    my $this = shift;
    $this .= $_ for @_;
    __PACKAGE__->new($this);
}

sub indexOf {
    my $this = shift;
    croak unless @_ > 0;
    @_ == 1 ? index $this->{toString}, $_[0]
            : index $this->{toString}, $_[0], $_[1];
}

sub lastIndexOf {
    my $this = shift;
    croak unless @_ > 0;
    @_ == 1 ? rindex $this->{toString}, $_[0]
            : rindex $this->{toString}, $_[0], $_[1];
}

sub localeCompare {
    my ( $this, $str ) = @_;
    return $this->{toString} lt $str ? -1
         : $this->{toString} gt $str ? 1
         :                               0;
}

sub match {
    my ( $this, $regexp ) = @_;
    $this =~ $regexp;
}

sub quote {
    my $this = shift;
    __PACKAGE__->new( qq("$this") );
}

sub replace {
    my ( $this, $regexp, $new, $flags ) = @_;
    $regexp = quotemeta $regexp unless ref $regexp eq 'Regexp';
    my $code = '$this =~ s/($regexp)/$new';
    $code .= ref $new eq 'CODE' ? '->($1)/e' : '/';
    $code .= $flags if $flags;
    eval $code;
    croak if $@;
    __PACKAGE__->new($this);
}

1; # End of String

=head1 NAME

String - wraps Perl's string primitive data type

=head1 VERSION

$Id$

=head1 SYNOPSIS

    use String;
    new String($string);

String literals take the form:

    'stringText'
    "stringText"

=head1 EXPORT

None.

=head1 METHODS

=head2 new

Create the string object.

=head2 fromCharCode

Returns a string created by using the specified sequence of Unicode values.

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
