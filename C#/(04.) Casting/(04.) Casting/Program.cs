using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.__Casting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int testVar1;           //Declaration of Variable
            testVar1 = 10;          //Initialization of Variable
            Console.WriteLine(testVar1);
            Console.WriteLine("\n");

            int testVar2 = 20;          //Declaration and Initialization of Variable
            Console.WriteLine(testVar2);
            Console.WriteLine("\n");

            //Implicit Casting (automatically) - converting a smaller type to a larger type size
            int testVar3 = 30;
            double testVar4 = testVar3;
            Console.WriteLine(testVar3);
            Console.WriteLine(testVar4);
            Console.WriteLine("\n");

            //Explicit Casting (manually) - converting a larger type to a smaller size type
            double testVar5 = 40.5;
            int testVar6 = (int)testVar5;
            Console.WriteLine(testVar5);
            Console.WriteLine(testVar6);
            Console.ReadLine();
        }
    }
}
