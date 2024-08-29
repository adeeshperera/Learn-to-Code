using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _16.__Function___using_parameter_and_return_type
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(testFunction(10, 20));
            Console.ReadLine();
        }
        static int testFunction(int a, int b)
        {
            return a + b;
        }
    }
}
