import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/why-sky-blue-2db86ae.webp"),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "G.E.N.I.E",
                style: GoogleFonts.orbitron(
                  textStyle: const TextStyle(
                    color: Color.fromARGB(255, 16, 33, 70),
                    fontSize: 70,
                  ),
                ),
              ),
              Image.asset(
                "assets/genielogo.png",
                height: 300,
                width: 300,
              ),
              Text(
                "Green Environmental Network \n     For Intelligent Ecosystem",
                style: GoogleFonts.orbitron(
                  textStyle: const TextStyle(
                    color: Color.fromARGB(255, 16, 33, 70),
                    fontSize: 20,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
