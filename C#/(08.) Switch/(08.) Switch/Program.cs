using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.__Switch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Type a vowel: ");
            char testVar1 = char.Parse(Console.ReadLine());
            switch (testVar1)
            {
                case 'a':
                    Console.WriteLine("‘a’ in ‘pan’");
                    break;
                case 'e':
                    Console.WriteLine("‘e’ in ‘rent’");
                    break;
                case 'i':
                    Console.WriteLine("‘i’ in ‘blind’");
                    break;
                case 'o':
                    Console.WriteLine("‘o’ in ‘cot’");
                    break;
                case 'u':
                    Console.WriteLine("‘u’ in ‘truck’");
                    break;
            }
            Console.ReadLine();
        }
    }
}
