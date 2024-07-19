import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:firebase_auth/firebase_auth.dart';

import 'package:google_sign_in/google_sign_in.dart';

class Login extends StatefulWidget {
  const Login({Key? key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final GoogleSignIn _googleSignIn = GoogleSignIn();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _signInWithEmailAndPassword() async {
    try {
      UserCredential userCredential = await _auth.signInWithEmailAndPassword(
        email: _emailController.text.trim(),
        password: _passwordController.text.trim(),
      );

      print("Signed in: ${userCredential.user?.uid}");

      Get.snackbar(
        "Success",
        "Signed in successfully",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 2),
      );

      Get.offNamed("/page3");
    } on FirebaseAuthException catch (e) {
      print("Error: $e");

      Get.snackbar(
        "Error",
        "Failed to sign in: ${e.message}",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 3),
      );
    }
  }

  Future<void> _signInWithGoogle() async {
    try {
      final GoogleSignInAccount? googleSignInAccount =
          await _googleSignIn.signIn();
      final GoogleSignInAuthentication googleSignInAuthentication =
          await googleSignInAccount!.authentication;

      final AuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleSignInAuthentication.accessToken,
        idToken: googleSignInAuthentication.idToken,
      );

      final UserCredential userCredential =
          await _auth.signInWithCredential(credential);

      print("Signed in with Google: ${userCredential.user?.displayName}");

      Get.snackbar(
        "Success",
        "Signed in with Google successfully",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 2),
      );
      Get.offNamed("/page3");
    } catch (e) {
      print("Error signing in with Google: $e");
      Get.snackbar(
        "Error",
        "Failed to sign in with Google",
        snackPosition: SnackPosition.BOTTOM,
        duration: const Duration(seconds: 3),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 16, 33, 70),
      body: Expanded(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Image.asset(
                  "assets/3867633.webp",
                  height: 300,
                  width: 300,
                ),
                const SizedBox(height: 20),
                TextField(
                  controller: _emailController,
                  decoration: InputDecoration(
                    hintText: 'Email',
                    filled: true,
                    fillColor: Colors.white.withOpacity(0.8),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8.0),
                      borderSide: BorderSide.none,
                    ),
                  ),
                ),
                const SizedBox(height: 16.0),
                TextField(
                  controller: _passwordController,
                  decoration: InputDecoration(
                    hintText: 'Password',
                    filled: true,
                    fillColor: Colors.white.withOpacity(0.8),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(9.0),
                      borderSide: BorderSide.none,
                    ),
                  ),
                  obscureText: true,
                ),
                const SizedBox(height: 50.0),
                SizedBox(
                  height: 50,
                  width: 200,
                  child: ElevatedButton(
                    onPressed: _signInWithEmailAndPassword,
                    style: ElevatedButton.styleFrom(
                      foregroundColor: const Color.fromARGB(255, 16, 33, 70),
                      backgroundColor: const Color.fromARGB(255, 255, 255, 255),
                    ),
                    child: Text(
                      "Login",
                      style: GoogleFonts.poppins(
                        textStyle: const TextStyle(
                          color: Color.fromARGB(255, 16, 33, 70),
                          fontSize: 15,
                        ),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 20.0),
                IconButton(
                  onPressed: _signInWithGoogle,
                  icon: const FaIcon(
                    FontAwesomeIcons.google,
                    color: Colors.white,
                  ),
                  tooltip: 'Sign in with Google',
                ),
                const SizedBox(height: 20.0),
                const SizedBox(
                  height: 2,
                  width: 200,
                ),
                // const SizedBox(height: 20.0),
                GestureDetector(
                  onTap: () {
                    Get.toNamed("/signup");
                  },
                  child: Text(
                    "Don't have an account? Signup",
                    style: GoogleFonts.poppins(
                      textStyle: const TextStyle(
                        color: Colors.white,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// class Page2 extends StatefulWidget {
//   const Page2({super.key});

//   @override
//   State<Page2> createState() => _Page2State();
// }

// class _Page2State extends State<Page2> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       backgroundColor: const Color.fromARGB(255, 16, 33, 70),
//       body: Center(
//         child: Padding(
//           padding: const EdgeInsets.all(16.0),
//           child: Column(
//             mainAxisSize: MainAxisSize.min,
//             children: [
//               Image.asset(
//                 "assets/3867633.webp",
//                 height: 300,
//                 width: 300,
//               ),
//               SizedBox(
//                 height: 20,
//               ),
//               TextField(
//                 decoration: InputDecoration(
//                   hintText: 'Username',
//                   filled: true,
//                   fillColor: Colors.white.withOpacity(0.8),
//                   border: OutlineInputBorder(
//                     borderRadius: BorderRadius.circular(8.0),
//                     borderSide: BorderSide.none,
//                   ),
//                 ),
//               ),
//               SizedBox(height: 16.0),
//               TextField(
//                 decoration: InputDecoration(
//                   hintText: 'Password',
//                   filled: true,
//                   fillColor: Colors.white.withOpacity(0.8),
//                   border: OutlineInputBorder(
//                     borderRadius: BorderRadius.circular(9.0),
//                     borderSide: BorderSide.none,
//                   ),
//                 ),
//                 obscureText: true,
//               ),
//               SizedBox(height: 50.0),
//               SizedBox(
//                 height: 50,
//                 width: 200,
//                 child: ElevatedButton(
//                   onPressed: () {},
//                   style: ElevatedButton.styleFrom(
//                     foregroundColor: const Color.fromARGB(255, 16, 33, 70),
//                     backgroundColor: Color.fromARGB(255, 255, 255, 255),
//                   ),
//                   child: Text(
//                     "Login",
//                     style: GoogleFonts.poppins(
//                       textStyle: const TextStyle(
//                         color: Color.fromARGB(255, 16, 33, 70),
//                         fontSize: 15,
//                       ),
//                     ),
//                   ),
//                 ),
//               ),
//               SizedBox(height: 20.0),
//               GestureDetector(
//                   onTap: () {
//                     Get.toNamed("/signup");
//                   },
//                   child: Text(
//                     "Don't have an account? Signup",
//                     style: GoogleFonts.poppins(
//                       textStyle: const TextStyle(
//                         color: Colors.white,
//                         decoration: TextDecoration.underline,
//                       ),
//                     ),
//                   ))
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }
