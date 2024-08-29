using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _17.__Function___return_multiple_values
{
    internal class Program
    {
        int test = 10;         //Global Variable
        static void Main(string[] args)
        {
            int a = 23;         //Local Variable
            int b = 10;
            int testVar1 = 0;           //Remainder
            int testVar2 = testFunction(a, b, ref testVar1);
            Console.WriteLine("Division= " + testVar2);
            Console.WriteLine("Remainder= " + testVar1);
            Console.ReadLine();
        }
        static int testFunction(int test1, int test2, ref int test3)
        {
            int testVar3 = test1 / test2;
            test3 = test1 % test2;
            return testVar3;
        }
    }
}
