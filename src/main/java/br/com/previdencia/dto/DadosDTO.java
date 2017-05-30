package br.com.previdencia.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DadosDTO {
	private String salario;
	private String valorArrecadadoX;
	private String valorArrecadadoY;
	private int mes;
	private int ano;
	
	public DadosDTO(String salario, String valorArrecadadoX, String valorArrecadadoY, int mes, int ano){
		setSalario(salario);
		setValorArrecadadoX(valorArrecadadoX);
		setValorArrecadadoY(valorArrecadadoY);
		setMes(mes);
		setAno(ano);
	}

	public String getSalario() {
		return salario;
	}

	public void setSalario(String salario) {
		this.salario = salario;
	}

	public String getValorArrecadadoX() {
		return valorArrecadadoX;
	}

	public void setValorArrecadadoX(String valorArrecadadoX) {
		this.valorArrecadadoX = valorArrecadadoX;
	}

	public String getValorArrecadadoY() {
		return valorArrecadadoY;
	}

	public void setValorArrecadadoY(String valorArrecadadoY) {
		this.valorArrecadadoY = valorArrecadadoY;
	}

	public int getMes() {
		return mes;
	}

	public void setMes(int mes) {
		this.mes = mes;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}
}
