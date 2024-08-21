using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.__While_Loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int testVar1 = 1;
            while (testVar1 <= 5)
            {
                Console.WriteLine(testVar1);
                testVar1++;         //testvar1 = testVar1 + 1;
            }
            Console.WriteLine("\n");

            int testVar2 = 1;           //Input
            double testVar3;            //User marks
            double testVar4 = 0;            //Total
            double testVar5;            //Average
            while (testVar2 <= 5)
            {
                Console.Write("Test input " + testVar2 + ": ");
                testVar3 = double.Parse(Console.ReadLine());
                testVar2++;
                testVar4 = testVar4 + testVar3;
            }
            testVar5 = testVar4 / 5;
            Console.WriteLine("Total- " + testVar4);
            Console.WriteLine("Average- " + testVar5);
            Console.ReadLine();
        }
    }
}
