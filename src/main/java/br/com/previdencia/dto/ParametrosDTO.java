package br.com.previdencia.dto;

public class ParametrosDTO {
	private double contribuicaox;
	private double contribuicaoy;
	private int tempo;
	
	public ParametrosDTO(){

	}

	public double getContribuicaox() {
		return contribuicaox;
	}

	public void setContribuicaox(double contribuicaox) {
		this.contribuicaox = contribuicaox;
	}

	public double getContribuicaoy() {
		return contribuicaoy;
	}

	public void setContribuicaoy(double contribuicaoy) {
		this.contribuicaoy = contribuicaoy;
	}

	public int getTempo() {
		return tempo;
	}

	public void setTempo(int tempo) {
		this.tempo = tempo;
	}

}
