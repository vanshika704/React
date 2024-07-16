import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:genie/Pages/Page2.dart';
import 'package:genie/Pages/Signup.dart';
import 'package:genie/firebase_options.dart';
import 'package:genie/pages/page1.dart';

import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:get/get_navigation/src/routes/get_route.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Genie',
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => const MyHomePage()),
        // GetPage(name: '/page2', page: () => const Page2()),
        GetPage(name: '/signup', page: () => const Signup()),
        GetPage(name: '/login', page: () => const Login()),
      ],
    );
  }
}
