import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Page3 extends StatefulWidget {
  const Page3({super.key});

  @override
  State<Page3> createState() => _Page3State();
}

class _Page3State extends State<Page3> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 16, 33, 70),
      body: Column(
        children: [
          Image.asset(
            "assets/droneweatherresistance.gif",
            height: 200,
          ),
        ],
      ),
    );
  }
}
