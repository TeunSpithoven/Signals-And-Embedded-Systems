#include <iostream>
#include <cmath>

int main()
{
    // sinus golf
    // complex getal waarvan we de hele tijd de absuluute
    // waarde een laten en het argument vergroten om hem zo rond te laten draaien

    class Complex
    {
    public:
        double re;
        double im;

        Complex(double real, double imaginary)
        {
            re = real;
            im = imaginary;
        }

        void Multiply(Complex c)
        {
            // z1 * z2 = (a1a2-b1b2) + j(a1b2 + a2b1)
            re = (re * c.re) - (im * c.im);
            im = (re * c.im) + (im * c.re);
            return;
        }
    };

    Complex gen = Complex(1.0, 0);
    Complex z = Complex(cos(0.1), sin(0.1));

    for (int i = 0; i < 500; i++)
    {
        std::cout << gen.re;
        std::cout << "\n";

        gen.Multiply(z);
    }

    std::cout << "\n\n";
}
