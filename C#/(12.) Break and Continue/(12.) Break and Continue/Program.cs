using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _12.__Break_and_Continue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i <= 5; i++)
            {
                if (i == 3)
                {
                    break;
                }
                Console.WriteLine(i);
            }
            Console.WriteLine("\n");

            for (int i = 5; i >= 0; i--)
            {
                if (i == 3)
                {
                    continue;
                }
                Console.WriteLine(i);
            }
            Console.ReadLine();
        }
    }
}
