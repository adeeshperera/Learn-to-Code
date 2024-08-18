using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.__User_Input
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string testVar1;
            Console.Write("Test input : ");
            testVar1 = Console.ReadLine();
            Console.WriteLine("The test input is " + testVar1);
            Console.WriteLine("\n");

            Console.Write("Test number input : ");
            int testVar2 = Int16.Parse(Console.ReadLine());
            /*
            int testVar2;
            testVar2 = Int16.Parse(Console.ReadLine());
            */
            Console.WriteLine("The test number input is " + testVar2);
            Console.ReadLine();
        }
    }
}
