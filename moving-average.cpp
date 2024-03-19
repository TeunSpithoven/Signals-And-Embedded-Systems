#include <iostream>

int main()
{
    // importeer crypto data van een maand ofzo
    double arr[8] = {1.0, 3.0, 4.0, 6.0, 10.0, 20.0, 3.0, 1.0};

    // loop door de array en pak het gemiddelde van iedere aantal(n) punten
    int n = 4;

    for (int i = 1; i < 8; i++)
    {
        if ((i + 1) % n == 0)
        {
            double sum = 0;

            for (int x = 1; x < n + 1; x++)
            {
                sum += arr[(i + 1) - x];
            }

            double average = sum / n;
            std::cout << average << ", ";
        }
    }
    std::cout << "\n\n";
}
