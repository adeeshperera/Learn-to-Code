using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.__Arrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] testVar1;
            testVar1 = new int[5];          //int[] testVar1 = new int[5];
            for(int i = 0; i < 5; i++)          //i = Index
            {
                Console.Write("Test input " + i + "- ");
                testVar1[i] = Int32.Parse(Console.ReadLine());
            }
            Console.WriteLine("\n");
            Console.WriteLine(testVar1[3]);
            Console.WriteLine("\n");

            for(int a = 0; a <5; a++)
            {
                Console.WriteLine(testVar1[a]);
            }
            Console.ReadLine();
        }
    }
}
