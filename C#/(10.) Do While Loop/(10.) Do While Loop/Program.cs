using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.__Do_While_Loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int testVar1;
            double testVar2 = 0;            //Total
            do
            {
                Console.Write("Test Input: ");
                testVar1 = Int32.Parse(Console.ReadLine());
                testVar2 += testVar1;           //testVar2 = testVar2 + testVar1;
            } while (testVar1 != 0);
            Console.WriteLine("Total= " + testVar2);
            Console.WriteLine("\n");

            int testVar3;
            double testVar4 = 0;            // Total
            do
            {
                Console.Write("Test Input: ");
                testVar3 = Int32.Parse(Console.ReadLine());

                if (testVar3 == -1)
                {
                    break;
                }
                testVar4 += testVar3;
            } while (true);

            Console.WriteLine("Total = " + testVar4);
            Console.ReadLine();
        }
    }
}
