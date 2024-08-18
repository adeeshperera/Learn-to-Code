using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.__Operators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int testVar1 = 10;
            int testVar2 = 20;
            Console.WriteLine(testVar1 + testVar2);
            Console.WriteLine(testVar1 - testVar2);
            Console.WriteLine(testVar1 * testVar2);
            Console.WriteLine((double)testVar1 / (double)testVar2);
            Console.WriteLine(testVar1 % testVar2);
            Console.WriteLine(testVar1++);
            Console.WriteLine(testVar2--);
            Console.WriteLine(testVar1);
            Console.WriteLine(testVar2);
            Console.WriteLine(testVar1 = testVar2);
            Console.WriteLine("\n");

            int testVar3 = 10;
            int testVar4 = 20;
            int testVar5 = 20;
            Console.WriteLine(testVar3 == testVar4);
            Console.WriteLine(testVar5 == testVar4);
            Console.WriteLine(testVar3 != testVar4);
            Console.WriteLine(testVar5 != testVar4);
            Console.WriteLine(testVar3 > testVar4);
            Console.WriteLine(testVar3 < testVar4);
            Console.WriteLine(testVar3 >= testVar4);
            Console.WriteLine(testVar3 <= testVar4);
            Console.WriteLine("\n");

            int testVar6 = 10;
            int testVar7 = 20;
            int testVar8 = 20;
            Console.WriteLine(testVar6 > testVar7 && testVar7 == testVar8);         //Logical and - Returns True if both statements are true
            Console.WriteLine(testVar6 > testVar7 || testVar7 == testVar8);         //Logical or -	Returns True if one of the statements is true
            Console.WriteLine(!(testVar6 < testVar7));          //Logical not -	Reverse the result, returns False if the result is true
            Console.ReadLine();
        }
    }
}
