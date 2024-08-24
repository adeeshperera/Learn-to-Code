using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.__For_Loop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 5; i >= 1; i--)
            {
                Console.WriteLine(i);
            }
            Console.WriteLine("\n");

            int testVar1;           //Input numbers
            double testVar2 = 0;           //Total
            double testVar3;            //Average
            for (int i = 1; i <= 5; i++)
            {
                Console.Write("Test input " + i + "- ");
                testVar1 = Int32.Parse(Console.ReadLine());
                testVar2 += testVar1;           //testvar2 = testVar2 + testVar1
            }
            testVar3 = testVar2 / 5;
            Console.WriteLine("Total= " + testVar2);
            Console.WriteLine("Average= " + testVar3);
            Console.ReadLine();
        }
    }
}
