-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/11/2024 às 15:12
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teste`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `livros`
--

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `anoPublicacao` int(11) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imageURL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `livros`
--

INSERT INTO `livros` (`id`, `titulo`, `anoPublicacao`, `autor`, `descricao`, `imageURL`) VALUES
(14, 'Harry Potter e a Pedra Filosofal', 1997, 'J.K. Rowling', 'Harry descobre que é um bruxo e entra na Escola de Magia, onde enfrenta desafios.', 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg'),
(15, 'Harry Potter e a Câmara Secreta', 1998, 'J.K. Rowling', 'Harry retorna a Hogwarts e investiga mistérios ligados à Câmara Secreta.', 'https://m.media-amazon.com/images/I/81jbivNEVML._AC_UF1000,1000_QL80_.jpg'),
(16, 'Harry Potter e o Prisioneiro de Azkaban', 1999, 'J.K. Rowling', 'Harry descobre mais sobre seu passado e enfrenta novos perigos no terceiro ano.', 'https://m.media-amazon.com/images/I/81u+ljPVifL._AC_UF1000,1000_QL80_.jpg'),
(17, 'Harry Potter e o Cálice de Fogo', 2000, 'J.K. Rowling', 'Harry participa de um torneio mágico, onde uma ameaça maior começa a surgir.', 'https://m.media-amazon.com/images/I/81nTLN-kz7L._AC_UF1000,1000_QL80_.jpg\n'),
(18, 'Harry Potter e a Ordem da Fênix', 2003, 'J.K. Rowling', 'Harry lidera a resistência contra o Ministério da Magia e enfrenta um novo inimigo.', 'https://m.media-amazon.com/images/I/81d6ESyPZwL._AC_UF1000,1000_QL80_.jpg'),
(19, 'Harry Potter e o Enigma do Príncipe', 2005, 'J.K. Rowling', 'Harry se prepara para uma batalha final contra as forças das trevas, descobrindo segredos importantes.', 'https://m.media-amazon.com/images/I/613xc1zkeaL._AC_UF1000,1000_QL80_.jpg'),
(22, 'Harry Potter e as Relíquias da Morte', 2007, 'J.K. Rowling', 'Harry, Ron e Hermione buscam destruir as Horcruxes de Voldemort para derrotá-lo de uma vez por todas.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX52dlmhTmkyKQWc0VlJihReeVZPgYfI0WAw&s');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `senha`, `email`) VALUES
(1, 'admin123', 'admin@gmail.com');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
