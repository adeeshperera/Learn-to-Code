using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.__If_Else
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double testVar1;
            Console.Write("Enter test mark: ");
            testVar1 = double.Parse(Console.ReadLine());
            /*Console.Write("Enter test number input: ");
            double testVar1 = double.Parse(Console.ReadLine());*/

            if(testVar1 >= 75)
            {
                Console.WriteLine("A");
            }
            else if(testVar1 >= 65)
            {
                Console.WriteLine("B");
            }
            else if(testVar1 >= 55)
            {
                Console.WriteLine("C");
            }
            else
            {
                Console.WriteLine("W");
            }
            Console.ReadLine();
        }
    }
}
